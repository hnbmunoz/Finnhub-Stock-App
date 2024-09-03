interface ButtonProps {
	access: boolean | undefined;
	size?: 'sm' | 'lg';
	label: string;
	type: 'button' | 'submit' | 'reset';
	weight: 'solid' | 'outline';
	style: string;
	loading?: boolean;
	loadingTitle?: string;
	disabled?: boolean;
	onClick?: () => void;
	additionalClassStyle?: any;
	customStyle?: any;
	children?: React.ReactNode;
	clickHandler?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const PrimaryButton: React.FC<ButtonProps> = ({
	access,
	size = 'sm',
	label,
	type = 'button',
	weight = 'solid',
	style = 'primary',
	loading = false,
	loadingTitle = '',
	disabled = false,
	additionalClassStyle,
	customStyle,
	children,
	clickHandler

}) => {
	return (
		<>
			{access ? (
				<button
					type={type}
					className={[
						'btn',
						`btn${weight === 'solid' ? '' : '-outline'}-${style}`,
						size !== undefined ? `btn-${size}` : '',
						'me-2',
						` primary-button ${additionalClassStyle}`,
					].join(' ')}
					disabled={disabled}
					style={customStyle}
					onClick={clickHandler}
				>
					{children}
					{!loading && !children && label}
					{loading && !children && (
						<span className='indicator-progress' style={{ display: 'block' }}>
							{loadingTitle}
							<span className='spinner-border spinner-border-sm align-middle ms-2'></span>
						</span>
					)}
				</button>
			) : null}
		</>
	);
};

export default PrimaryButton;
