import React from 'react';

interface ButtonProps {
  label: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const { disabled, label, handleClick } = props;

  return (
    <button
      className={
        label === 'Cancel'
          ? 'bg-[#F4EBFF] text-[#6941C6] font-bold py-2 px-4 rounded'
          : 'bg-[#6941C6] text-white font-bold py-2 px-4 rounded'
      }
      onClick={handleClick}
      disabled={disabled}
      data-testid={label}
    >
      <div>{label}</div>
    </button>
  );
};

export default Button;
