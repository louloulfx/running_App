import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import dbh from '../db';

// getbyid
// const courses = dbh.collection('courses').doc('KPr3c7ZydkfvWiQW2unk')
// courses.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });

const courses = dbh.collection('courses');



class HistoryComponent extends React.Component {
    state = { data: [] }
    componentDidMount() {
        let courseList = [];
        courses.get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    let date = new Date(doc.data().start_date.seconds * 1000);
                    let difference = (doc.data().end_date.seconds - doc.data().start_date.seconds) * 1000;
                    let time = new Date(difference);
                    let oneHour = new Date(0);
                    let runTime =  ("0" + (time.getHours() - oneHour.getHours())).slice(-2) + ':' + ("0" + time.getMinutes()).slice(-2) + ':' + ("0" + time.getSeconds()).slice(-2);
                    let dayDate = ("0" + date.getDate()).slice(-2) + '/' + ("0" + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
                    let hour = ("0" + date.getHours()).slice(-2) + ':' + ("0" + date.getMinutes()).slice(-2);
                    doc.data().start_date.runTime = runTime;
                    doc.data().start_date.date = dayDate;
                    doc.data().start_date.hour = hour;
                    courseList.push(doc.data());
                });
                this.setState({ data: courseList });
                console.log(this.state.data[0]);
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
    }
    render() {

        return (
            <View>
                {this.state.data.map((data, index) => {
                    return <View key={index} style={styles.main_container}>
                        <View style={styles.container1}>

                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.date} >{data.start_date.date}</Text>
                                <Text style={styles.hour}>{data.start_date.hour}</Text>
                            </View>
                            <View
                                style={styles.hr}
                            />
                            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.time} >{data.start_date.runTime} • {data.distance} km</Text>
                            </View>
                        </View>
                        <View style={{
                            flex: 4
                        }}>
                            <Image source={require('../assets/images/maptest.png')} style={{ width: 150, height: 90, borderRadius: 10 }}></Image>
                        </View>
                    </View>
                })}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        backgroundColor: '#0072BC',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        height: 100,
        marginBottom: 5
    },
    container1: {
        flex: 5,
        alignItems: 'center',
    },
    hr: {
        borderColor: '#fff',
        borderWidth: 1,
        height: 1,
        width: '80%',
    },
    date: {
        color: '#fff',
        fontSize: 20,
        marginRight: 7
    },
    hour: {
        color: '#fff',
        fontSize: 15,
        paddingTop: 5
    },
    time: {
        color: '#fff',
        fontSize: 15
    }

})


export default HistoryComponent