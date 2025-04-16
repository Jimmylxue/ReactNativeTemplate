import {NIcon, TIconType} from '@components/Icon/NIcon';
import {StyleSheet, View, Pressable, Text, ViewProps} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';

interface TProps extends ViewProps {
  theme?: 'primary';
  onPress?: () => void;
  iconName?: string;
  iconType?: TIconType;
}

export default function NButton({
  children,
  theme,
  iconName,
  iconType,
  onPress,
  ...args
}: TProps) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer]} {...args}>
        <Pressable
          className="bg-[#3db2f5]"
          style={styles.button}
          onPress={onPress}>
          {iconName && (
            <NIcon
              iconType={iconType as TIconType}
              name={iconName}
              size={18}
              color="#25292e"
              style={styles.buttonIcon}
            />
          )}
          <Text className="text-white">{children}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer} {...args}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonLabel}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    // width: 320,
    height: 60,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
