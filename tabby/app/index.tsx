import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAudioPlayer, AudioSource } from 'expo-audio';

const NOTE_BG: Record<string, string> = {
    C: 'bg-note-c',
    D: 'bg-note-d',
    E: 'bg-note-e',
    F: 'bg-note-f',
    G: 'bg-note-g',
    A: 'bg-note-a',
    B: 'bg-note-b',
};

const keys: { note: string; solfege: string; source: AudioSource }[] = [
    { note: 'C3', solfege: 'Do', source: require('../assets/sounds/C3.wav') },
    { note: 'D3', solfege: 'Re', source: require('../assets/sounds/D3.wav') },
    { note: 'E3', solfege: 'Mi', source: require('../assets/sounds/E3.wav') },
    { note: 'F3', solfege: 'Fa', source: require('../assets/sounds/F3.wav') },
    { note: 'G3', solfege: 'Sol', source: require('../assets/sounds/G3.wav') },
    { note: 'A3', solfege: 'La', source: require('../assets/sounds/A3.wav') },
    { note: 'B3', solfege: 'Si', source: require('../assets/sounds/B3.wav') },
    { note: 'C4', solfege: 'Do', source: require('../assets/sounds/C4.wav') },
];

function PianoKey({ note, solfege, source }: { note: string; solfege: string; source: AudioSource }) {
    const player = useAudioPlayer(source);
    const letter = note[0];
    const bg = NOTE_BG[letter] ?? 'bg-tabby-brown';

    return (
        <Pressable
            onPress={() => {
                player.seekTo(0);
                player.play();
            }}
            className={`${bg} w-20 h-20 m-2 items-center justify-center rounded-xl`}
        >
            <Text className="text-tabby-cream text-lg font-bold leading-tight">{solfege}</Text>
            <Text className="text-tabby-cream/70 text-xs font-medium">{note}</Text>
        </Pressable>
    );
}

export default function Playground() {
    return (
        <SafeAreaView className="bg-tabby-cream flex-1">
            <View className="flex-1 items-center justify-center flex-row flex-wrap px-4">
                {keys.map((key) => (
                    <PianoKey key={key.note} note={key.note} solfege={key.solfege} source={key.source} />
                ))}
            </View>
        </SafeAreaView>
    );
}
