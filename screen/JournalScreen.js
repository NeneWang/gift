import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

import { FAB } from 'react-native-paper';
import JournalCard from '../components/JournalCard';
import { fetchAllJournalEntries, fetchJournals } from '../api/database';



const onAddJournalPress = () => {
    // Logic to open a screen or modal to add a new journal
};


const mockJournals = [
    {
        id: 1,
        title: 'Dream Vacation',
        date: '2023-01-01',
        description: 'Planning my dream vacation to Japan.',
        icon: 'airplane'
    },
    {
        id: 2,
        title: 'Book List 2023',
        date: '2023-01-05',
        description: 'My reading list for the year includes classic fiction and modern tech books.',
        icon: 'book'
    },
    {
        id: 3,
        title: 'Yoga Routine',
        date: '2023-01-10',
        description: 'Started a new yoga routine to improve flexibility and reduce stress.',
        icon: 'human'
    },
    // Add more entries as needed
];





export default function JournalScreen({ navigation }) {
    
    const [journals, setJournals] = useState([]);


    useEffect(() => {
        // fetchAllJournalEntries().then(data => {
        //     setJournals(data);
        // });
    }, []);


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Journal Screen</Text>
            <ScrollView>
                <View>
                {journals.map((journal) => (
                        <JournalCard
                            key={journal.id}
                            title={journal.title}
                            date={journal.date}
                            description={journal.description}
                            icon={journal.icon}
                        />
                    ))}
                </View>
            </ScrollView>


            <FAB
                style={{
                    position: 'absolute',
                    margin: 16,
                    right: 0,
                    bottom: 0,
                }}
                small
                icon="plus"
                onPress={onAddJournalPress}
            />
            <Button
                title="Go to Desires"
                onPress={() => navigation.navigate('Desires')}
            />
        </View>
    );
}
