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
    render() {
        var list = [];
        courses.get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    console.log(snapshot.docs.length)
                    for (let i = 0; i < snapshot.docs.length; i++) {}
                    console.log(doc.data().id_user);
                    return doc.data();
                });
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });
        return (
            <View style={styles.main_container}>
                <View style={styles.container1}>
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={styles.date} >05/10/19</Text>
                        <Text style={styles.hour}>15:33</Text>
                    </View>
                    <View
                        style={styles.hr}
                    />
                    <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={styles.time} >00:36:25 • 8km</Text>
                    </View>
                </View>
                <View style={{
                    flex: 4
                }}>
                    <Image source={require('../assets/images/maptest.png')} style={{ width: 150, height: 90, borderRadius: 10 }}></Image>
                </View>
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