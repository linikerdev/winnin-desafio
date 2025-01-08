import styled, { CSSObject } from 'styled-components';
type LogoProps = {
    css?: CSSObject
};

const Logo = ({ css }: LogoProps) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <FontLogo className='firstSlice' $css={css}>BUSC</FontLogo>
            <FontLogo className='endSlice' $css={css}>ANIME</FontLogo>
        </div>
    );
};

export default Logo;


const FontLogo = styled.div<{ $css?: CSSObject }>`
    font-size: 40px;
    line-height: 50.2px;
    font-weight: 400;
    ${props => props.$css}
    &.firstSlice {
        color: ${props => props.theme.colors.text};
    }
    &.endSlice {
        color: ${props => props.theme.colors.secondary};
    }

`    