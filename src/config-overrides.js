import { useBabelRc, override } from "customize-cra";

const BabelRcHook = () => {
  const config = useBabelRc();
  return config;
};

export default override(BabelRcHook);
