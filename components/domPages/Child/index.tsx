"use dom";

import { useFormContext } from "~/hooks/useFormProvider";
import { schemaOne } from "~/util/validation/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import { useGlobalButtonHaptics } from "~/components/global-button-haptics";
import WebLayout from "../web-layout";

type Props = {
  navigate: typeof import("expo-router").router["navigate"];

  ref?: import("react").RefObject<import("react-native-webview").WebView>;
  dom?: import("expo/dom").DOMProps;
};

export default function PageOne({
  navigate,
  onButtonClick,
}: {
  navigate: typeof import("expo-router").router["navigate"];
  dom?: import("expo/dom").DOMProps;
  ref?: import("react").RefObject<import("react-native-webview").WebView>;
  onButtonClick: (size: number) => Promise<void>;
}) {
  useGlobalButtonHaptics(onButtonClick);

  return (
    <WebLayout navigate={navigate} >
      <div className="bg-white flex-1 flex-col gap-4 overflow-y-scroll form-style">
        <h2>Child</h2>
        
      </div>
    </WebLayout>
  );
}
