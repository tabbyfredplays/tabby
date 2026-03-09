import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createAudioPlayer, AudioSource } from 'expo-audio';


const keys: { note: string; solfege: string; source: AudioSource; bg: string }[] = [
    { note: 'C3', solfege: 'Do', source: require('../assets/sounds/C3.wav'), bg: 'bg-note-c' },
    { note: 'D3', solfege: 'Re', source: require('../assets/sounds/D3.wav'), bg: 'bg-note-d' },
    { note: 'E3', solfege: 'Mi', source: require('../assets/sounds/E3.wav'), bg: 'bg-note-e' },
    { note: 'F3', solfege: 'Fa', source: require('../assets/sounds/F3.wav'), bg: 'bg-note-f' },
    { note: 'G3', solfege: 'Sol', source: require('../assets/sounds/G3.wav'), bg: 'bg-note-g' },
    { note: 'A3', solfege: 'La', source: require('../assets/sounds/A3.wav'), bg: 'bg-note-a' },
    { note: 'B3', solfege: 'Si', source: require('../assets/sounds/B3.wav'), bg: 'bg-note-b' },
    { note: 'C4', solfege: 'Do', source: require('../assets/sounds/C4.wav'), bg: 'bg-note-c' },
];

function PianoKey({ note, solfege, source, bg }: { note: string; solfege: string; source: AudioSource; bg: string }) {
    return (
        <Pressable
            onPress={() => {
                const player = createAudioPlayer(source);
                player.play();
            }}
            className={`${bg} w-full h-20 m-2 items-center justify-center rounded-xl shadow-sm`}
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
                    <PianoKey key={key.note} note={key.note} solfege={key.solfege} source={key.source} bg={key.bg} />
                ))}
            </View>
        </SafeAreaView>
    );
}
