import PropTypes from 'prop-types';
import Line from '../line/line';
import Button from '../button/button';
import { StyledSocialButtons, StyledSocialSignup, StyledOrSignup } from './socialButtons.styles'

const SocialButtons = ({ title, buttons }) => {
  return <StyledSocialButtons>
    <StyledSocialSignup>
      <Line width={35} />
      <StyledOrSignup>
        Or {title} with
      </StyledOrSignup>
      <Line width={35} />
    </StyledSocialSignup>
    <StyledSocialButtons>
      {buttons.map((button, i) => {
        return <Button key={i} bordered onClick={button.onClick}>
          {button.button}
        </Button>
      })}
    </StyledSocialButtons>
  </StyledSocialButtons>
}

SocialButtons.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    button: PropTypes.node.isRequired,
    onClick: PropTypes.func
  })).isRequired,
};

export default SocialButtons;