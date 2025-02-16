import React from 'react';
import { RouteComponentProps } from 'react-router';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { FindLyrics_songLyrics } from '../generated/FindLyrics';
import { FindSongs_songs } from '../generated/FindSongs';
import Card from 'react-bootstrap/Card';

type LyricsLocationState = {
    song: FindSongs_songs;
    songLyrics: FindLyrics_songLyrics;
}

interface LyricsProps extends RouteComponentProps<any, any, LyricsLocationState> {
}

export const Lyrics = (props: LyricsProps) => {
    const songLyrics = props.location.state.songLyrics;
    const song = props.location.state.song;
    return (
        <Container className='lf-lyrics'>
            <Card>
                <Card.Header>{song.name} (<Link to='/' title='Go back'>Go back</Link>)</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <span dangerouslySetInnerHTML={{__html: songLyrics.lyrics}}/>
                    </Card.Text>
                    <h4>Copyright:</h4>
                    <span>{songLyrics.copyright}</span>
                </Card.Body>
            </Card>
        </Container>
    );
};
