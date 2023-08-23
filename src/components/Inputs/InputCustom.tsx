import { Input } from 'antd';
import React, { ReactNode, useMemo } from 'react';
import FormItem from '../Form/FormItem';
import { Validations } from '@/src/lib/Validation';

interface PropsInputCustom {
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  name: string;
  prefix?: ReactNode;
  rules: Array<string>;
  hdChange?: (name: string, value: string) => void;
}

const InputCustom: React.FC<PropsInputCustom> = ({
  disabled,
  className,
  placeholder,
  name,
  prefix,
  rules,
  hdChange,
}) => {
  const { validation } = Validations(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    hdChange && hdChange(name, value);
  };

  const handleRules = useMemo(() => {
    const ans = [];
    let idx = 0;

    for (let [key, value] of Object.entries(validation)) {
      if (rules[idx] === String(key)) {
        ans.push(value);
        idx++;
      }
    }

    return ans;
  }, [validation]);

  return (
    <FormItem name={name} rules={handleRules}>
      <Input
        disabled={disabled}
        className={className}
        prefix={prefix}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </FormItem>
  );
};

export default InputCustom;
