import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import CustomInput from '../../components/custom-input/custom-input.component';
import './sign-in.css'

import {Container, Header ,Button} from './sign-in.style';

const SignIn=(props)=>{
    const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
    const handleEmail = event => {
        const { value } = event.target;
        setEmail(value);
      
      };
      const handlePassword = event => {
        const { value } = event.target;
        setPassword(value);
      
      };
    return   <div className='main__page'> 
        <Container>
        <div className="upper">
        <Header>Sign In</Header>
        <CustomInput
						name='Email'
						type='email'
						value={email}
						handleChange={handleEmail}
						label='Email'
					/>
                    <CustomInput
                                    name='Password'
                                    type='password'
                                    value={password}
                                    handleChange={handlePassword}
                                    label='Password'
                                />
<Button onClick={()=>props.history.push('/home')}>Sign In</Button>
        </div>
        <div className="lower">
            <div className="service">
                <div className="remember">

            <input type="checkbox" className="check-box"/>
            <span style={{marginLeft:'10px'}}>Remember me</span>
            </div>
            <div className="healp">
                <Link to='/forget-password'>Need help ? </Link>
            </div>
            </div>
            <div className="description">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg==" alt="face book logo" className="icon"/>
                <Link to='#' className="facebook" style={{marginLeft:'10px'}}>Login with Facebook</Link>
            </div>

            <div className="to-signup">
                <span className="gray">New to Movie Star ?</span>
                <a href="/signup" className="signup">SignUp</a>
            </div>
            
        </div>
        
        </Container>
    

    </div>
}

export default SignIn;