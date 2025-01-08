import React from 'react';

type TagProps = {
    text: string;
};

const Tag: React.FC<TagProps> = ({ text }) => {
    return <span className="tag">{text}</span>;
};

export default Tag;
