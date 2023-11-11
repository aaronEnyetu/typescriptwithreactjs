import React from 'react'
import ReactDOM from 'react-dom'
import profile1 from './image/profile1.jpeg'
import profile2 from './image/profile2.jpeg'
import profile3 from './image/profile3.jpg'
import SingleComment from './SingleComment'
import UserCard from './UserCard'


const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
            <SingleComment name='Amin' date='Today at 5:00 PM' text='It is amazing...' img={profile1} />
            </UserCard>
            <UserCard>
            <SingleComment name='Jack' date='Today at 7:00 PM' text='Great experience!' img={profile2} />
            </UserCard>
            <UserCard>
            <SingleComment name='Sarah' date='Today at 8:00 PM' text='Absolutely incredible...' img={profile3} />
            </UserCard>
        
        </div>
     
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)