import * as C from './styles'
import {Link} from 'react-router-dom'
import {ReactComponent as ProfileIcon} from '../../svgs/profile.svg';
import {ReactComponent as BookIcon} from '../../svgs/book.svg';
import {ReactComponent as MailIcon} from '../../svgs/mail.svg';


type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}
export const SidebarItem = ({ title, description, icon, path,active }: Props) => {
    return (
        <C.Container>
            <Link to={path}>
                <C.Info>
                    <C.Title>{title}</C.Title>
                    <C.Description>{description}</C.Description>
                </C.Info>
                <C.IconArea active={active}>
                    {icon == 'profile'&&
                      <ProfileIcon height={24} width={24} fill='white'></ProfileIcon>
                    }
                    {icon == 'book'&&
                      <BookIcon height={24} width={24} fill='white'></BookIcon>
                    }
                             {icon == 'mail'&&
                      <MailIcon height={24} width={24} fill='white'></MailIcon>
                    }
                    
                    
                   
                </C.IconArea>
                <C.Point active={active}></C.Point>
            </Link>
        </C.Container>
    );
}