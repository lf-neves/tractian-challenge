import { MenuItem, Select } from "@mui/material";

interface SelectMenuProps {
  data: Array<{ label: string; value: number }>;
  onChange: (value: number) => void;
  selectedValue: number;
}

export const SelectMenu: React.FC<SelectMenuProps> = ({
  data,
  onChange,
  selectedValue,
}) => {
  return (
    <Select
      value={selectedValue}
      fullWidth
      size="small"
      onChange={(e) => onChange(e.target.value as number)}
    >
      {data.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
};
