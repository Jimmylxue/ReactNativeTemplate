import FontAwesome from '@react-native-vector-icons/fontawesome';
import AntDesign from '@react-native-vector-icons/ant-design';
import Entypo from '@react-native-vector-icons/entypo';
import EvilIcons from '@react-native-vector-icons/evil-icons';
import Feather from '@react-native-vector-icons/feather';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

export type TIconType =
  | 'FontAwesome'
  | 'AntDesign'
  | 'Entypo'
  | 'EvilIcons'
  | 'Feather';

interface TProps {
  iconType: TIconType;
  name: string;
  onPress?: () => void;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export function NIcon({iconType, onPress, ...arg}: TProps) {
  const args = {...arg, size: arg.size ? arg.size : 40};
  const iconMap = {
    // @ts-ignore
    FontAwesome: <FontAwesome {...args} />,
    // @ts-ignore
    AntDesign: <AntDesign {...args} />,
    // @ts-ignore
    Entypo: <Entypo {...args} />,
    // @ts-ignore
    EvilIcons: <EvilIcons {...args} />,
    // @ts-ignore
    Feather: <Feather {...args} />,
  };
  return <Pressable onPress={onPress}>{iconMap[iconType]}</Pressable>;
}
