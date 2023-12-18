import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';




const JournalCard = ({ title, date, description, icon }) => {
  return (
    <Card>
      <Card.Title title={title} subtitle={date} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
};

export default JournalCard;
