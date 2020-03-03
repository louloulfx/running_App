import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import dbh from "../db";
import firebase from "firebase";
import { TextInput } from "react-native-gesture-handler";

const courses = dbh.collection("courses");

class HistoryComponent extends React.Component {
  state = { data: [], uid: "" };
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ uid: currentUser.uid });
    let courseList = [];
    courses
      .get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          let date = new Date(doc.data().start_date.seconds * 1000);
          let difference =
            (doc.data().end_date.seconds - doc.data().start_date.seconds) *
            1000;
          let time = new Date(difference);
          let oneHour = new Date(0);
          let runTime =
            ("0" + (time.getHours() - oneHour.getHours())).slice(-2) +
            ":" +
            ("0" + time.getMinutes()).slice(-2) +
            ":" +
            ("0" + time.getSeconds()).slice(-2);
          let dayDate =
            ("0" + date.getDate()).slice(-2) +
            "/" +
            ("0" + (date.getMonth() + 1)).slice(-2) +
            "/" +
            date.getFullYear();
          let hour =
            ("0" + date.getHours()).slice(-2) +
            ":" +
            ("0" + date.getMinutes()).slice(-2);
          doc.data().start_date.runTime = runTime;
          doc.data().start_date.date = dayDate;
          doc.data().start_date.hour = hour;
          courseList.push(doc.data());
        });
        this.setState({ data: courseList });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }
  render() {
    return (
      <View>
        {this.state.data.map((data, index) => {
          if (data.user_id == this.state.uid) {
            return (
              <View key={index} style={styles.main_container}>
                <View style={styles.container1}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                  >
                    <Text style={styles.date}>{data.start_date.date}</Text>
                    <Text style={styles.hour}>{data.start_date.hour}</Text>
                  </View>
                  <View style={styles.hr} />
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                  >
                    <Text style={styles.time}>
                      {data.start_date.runTime} • {data.distance} km
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 4
                  }}
                >
                  <Image
                    source={require("../assets/images/maptest.png")}
                    style={styles.img}
                  ></Image>
                </View>
              </View>
            );
          }
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 130,
    height: 80,
    borderColor: "#c8c8c8",
    borderWidth: 1,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderRadius: 10
  },
  main_container: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    flexDirection: "row",
    borderTopEndRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 100,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    marginBottom: 15,
    marginRight: 15,
    marginLeft: 15
  },
  container1: {
    flex: 5,
    alignItems: "center"
  },
  hr: {
    borderColor: "#000",
    borderWidth: 1,
    height: 1,
    width: "80%"
  },
  date: {
    color: "#000",
    fontSize: 20,
    marginRight: 7
  },
  hour: {
    color: "#000",
    fontSize: 15,
    paddingTop: 5
  },
  time: {
    color: "#000",
    fontSize: 15
  }
});

export default HistoryComponent;
