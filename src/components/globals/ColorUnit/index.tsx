/* eslint-disable @typescript-eslint/ban-ts-comment */
import HSBColorPicker from "@/components/globals/ColorUnit/HSBColorPicker";
import RGBColorPicker from "./RGBColorPicker";
import HSLColorPicker from "./HSLColorPicker";
import ColorPicker from "./ColorPicker";
import ColorField from "@/components/globals/ColorUnit/ColorField";
import TraditionalTab from "@/components/common/TraditionalTab";

interface ColorUnitProps {
   label: string;
   color: string;
   setColor: (color: string) => void;
}

function Index({ label, setColor, color }: ColorUnitProps) {
   const colorOptions = ["Picker", "RGB", "HSL", "HSB"];

   return (
      <div className="bg-white w-full xl:w-auto pt-6 px-6 pb-12 flex gap-6 flex-col">
         <h4 className="text-xl leading-normal">{label}</h4>
         <ColorField setColor={setColor} color={color} />

         <TraditionalTab label={label} options={colorOptions}>
            <ColorPicker color={color} setColor={setColor} />
            <RGBColorPicker color={color} setColor={setColor} />
            <HSLColorPicker color={color} setColor={setColor} />
            <HSBColorPicker color={color} setColor={(value) => setColor(value)} />
         </TraditionalTab>
      </div>
   );
}

export default Index;
