
type Props = { children?: React.ReactNode };

export const Layout = ({ children }: Props): JSX.Element => {
    return (
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )
};
