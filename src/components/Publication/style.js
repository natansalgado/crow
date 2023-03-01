import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin: 10px auto;
  max-width: 500px;
  width: 100%;
  padding: 20px 16px 0;

  color: #333;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border-bottom: 1px solid #e6ecf0;

 p {
  line-height: 20px;
 }

 .date {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
 }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Username = styled.h4`
  font-weight: bold;
  margin-bottom: 4px;
  width: fit-content;
`;

export const Post = styled.div`
  margin-bottom: 4px;
`;

export const TimeStamp = styled.h4`
  font-weight: 400;
  color: #777;
  margin-bottom:4px;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Span = styled.span`
  color: #777;
  font-weight: bold;
  margin: 0 5px 4px 5px;
`

export const Img = styled.img`
align-self: center;
max-height: 400px;
max-width: 100%;
object-fit: fill;
margin-top: 10px;
border-radius: 10px;
`

export const Feed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0 20px;
  width: 100%;

  .comments:hover {
    color: #0070a0;
  }
  
  .like:hover {
    color: #cc0648;
  }
  
  .views:hover {
    color: #009070;
  }
`

export const Part = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`