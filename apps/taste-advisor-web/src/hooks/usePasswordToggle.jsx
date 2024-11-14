import { useState, useEffect } from 'react';

function usePasswordToggle() {
  const [isVisible, setIsVisible] = useState(false);
  const [eyeIcon, setEyeIcon] = useState('/images/visibility-off.png');
  const inputType = isVisible ? 'text' : 'password';

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  useEffect(() => {
    setEyeIcon(
      isVisible ? '/images/visibility.png' : '/images/visibility-off.png',
    );
  }, [isVisible]);

  return { inputType, eyeIcon, toggleVisibility };
}

export default usePasswordToggle;
