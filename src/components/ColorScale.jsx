import { ColorScales, colors } from '@lobehub/ui';

export default function ColorScheme() {  // Component name changed to function style
    return <ColorScales name="gray" scale={colors.gray} midHighLight={9} />;
}