import {withRouter} from 'next/router'
import styled from 'styled-components';
// import moment from "moment";
import dynamic from "next/dynamic";

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`;

const Comp = dynamic(import('../components/comp'));

const A = ({router, name, count, time}) => {
  // console.log(router);
  return (
    <div>
      <Title>This is Title - {time}</Title>
      <Comp />
      <a href="">
        {router.query.id} - {name} - {count}
      </a>
    </div>

  )
}

// 服务端和客户端都会使用，这是在 页面加载之前执行
A.getInitialProps = async ({req, query}) => {
  console.log('+++++++++++');
  // lazy loading package
  const moment = await import('moment');
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve({
      query,
      name: 'rick',
      time: moment.default(Date.now() - 60 * 1000).fromNow()
    }), 1000);
  })
  return await promise;
}

export default withRouter(A);