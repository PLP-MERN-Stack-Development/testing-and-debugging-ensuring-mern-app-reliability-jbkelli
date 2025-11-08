import PropTypes from 'prop-types';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...rest
}) {
  const baseClasses = 'font-medium rounded transition-colors';
  
  const variantClasses = {
    primary: 'btn-primary bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'btn-secondary bg-gray-200 hover:bg-gray-300 text-gray-800',
    danger: 'btn-danger bg-red-600 hover:bg-red-700 text-white',
    success: 'btn-success bg-green-600 hover:bg-green-700 text-white'
  };
  
  const sizeClasses = {
    sm: 'btn-sm px-2 py-1 text-sm',
    md: 'btn-md px-4 py-2',
    lg: 'btn-lg px-6 py-3 text-lg'
  };
  
  const disabledClass = disabled ? 'btn-disabled opacity-50 cursor-not-allowed' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClass} ${className}`.trim();
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string
};

export default Button;
