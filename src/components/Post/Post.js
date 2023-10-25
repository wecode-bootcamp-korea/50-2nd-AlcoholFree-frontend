import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import './Post.scss';

const Post = ({ company, setCompany }) => {
  const complete = ({ address, addressType, bname, buildingName }) => {
    let fullAddress = address;
    let extraAddress = '';

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }
      if (buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
    }

    setCompany({
      ...company,
      address: fullAddress,
    });
  };

  return <DaumPostcode className="postmodal" autoClose onComplete={complete} />;
};

export default Post;
