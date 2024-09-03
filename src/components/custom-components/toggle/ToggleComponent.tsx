interface ToggleProps {
  toggleId: string;
  toggleChange: (e: any) => void;
  toggleDefaultValue: boolean;
  toggleTagging: string;
  isDisabled: boolean
}

const ToggleComponent = ({ toggleId, toggleChange, toggleDefaultValue, toggleTagging, isDisabled }: ToggleProps) => {
  return (
      <div className={`form-check form-switch form-check-custom form-check-solid`}  >
        <div className="d-flex">
          <input
              className='form-check-input input-edit toggle-main'
              type='checkbox'
              value=''
              id={toggleId}
              onChange={(event) => {
                toggleChange(event.target.checked)
              }}
              defaultChecked={toggleDefaultValue}
              disabled={isDisabled}
          />
          <div className='form-check-label' style={{marginLeft:'0.5rem'}}>{toggleTagging}</div>
        </div>
      </div>
  )
}

export default ToggleComponent