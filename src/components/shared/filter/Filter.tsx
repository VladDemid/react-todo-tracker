import styles from "./Filter.module.scss";

export default function Filter({
  onFilterChange,
  defaultValue,
  options,
}: FilterInput) {
  return (
    <div className={styles.filter}>
      <select defaultValue={""} onChange={(event) => onFilterChange(event)}>
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.title}
          </option>
        ))}
        {/* <option value="newest">newest</option>
        <option value="oldest">oldest</option> */}
      </select>
    </div>
  );
}

type FilterInput = {
  onFilterChange: Function;
  defaultValue: string;
  options: Option[];
};

type Option = {
  title: string;
  value: string;
};
