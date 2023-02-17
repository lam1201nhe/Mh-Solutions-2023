import Link from "next/link";

const Link = (props) => {
    const { href, ...rest } = props;
    
    return <Link href={href} {...rest}/>
}

export default Link;