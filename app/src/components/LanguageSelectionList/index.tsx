import SelectDropdown, {
  SelectDropdownProps,
} from "react-native-select-dropdown";

const DATA = {
  日本語: "ja-JP",
  英語: "en-US",
};

const DisplayItems: string[] = Object.keys(DATA);

type Props = {
  disabled?: boolean;
  onSelect: (item: string) => void;
};

const LanguageSelectionList = (props: Props) => {
  return (
    <SelectDropdown
      disabled={props.disabled}
      defaultButtonText={"言語選択"}
      data={DisplayItems}
      onSelect={(selectedItem, index) => {
        props.onSelect(DATA[selectedItem]);
      }}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};

export default LanguageSelectionList;
