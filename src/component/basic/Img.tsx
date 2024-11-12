import {DetailedHTMLProps, ImgHTMLAttributes} from 'react'

const Img = ({
                 className, alt,
                 ...attributes
             }: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
    return (
        <img className={`w-full h-full block ${className}`} alt={alt} {...attributes}  />
    )
}
export default Img
