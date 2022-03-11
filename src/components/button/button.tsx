import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';

interface ButtonProps extends CSSProperties {
  text?: string;
  type?: 'standard' | 'warn' | 'danger';
  loading?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  disableUserSelect?: boolean;
  navigateTo?: string;
  className?: string;
}

type StyleProps = Omit<ButtonProps, 'text' | 'loading' | 'disabled' | 'fullWidth' | 'type' | 'navigateTo' | 'disableUserSelect'>;

const useStyles = createUseStyles({
  button: (props: StyleProps) => ({
    padding: 8,
    ...props
  })
})

const Button: React.FC<ButtonProps> = ({ text, loading, fullWidth, disabled, disableUserSelect, navigateTo, className, children }) => {
  const defaultClasses = useStyles();

  return (
    <button
      className={classNames(defaultClasses.button, className)}
    >
      {text || children}
    </button>
  )
};

export default Button;
