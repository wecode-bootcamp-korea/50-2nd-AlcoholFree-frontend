import React from 'react';
import './Post.scss';
import DaumPostcode from 'react-daum-postcode';

const Post = (props) => {
  const complete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? `(${extraAddress})` : '';
    }

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  return (
    <div>
      <div className="Post">
        <DaumPostcode className="postModal" autoClose onComplete={complete} />
      </div>
    </div>
  );
};

export default Post;
