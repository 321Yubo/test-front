import {Outlet} from 'react-router-dom'
import { Menu, Layout } from 'antd';
import {Link} from 'react-router-dom'
import './index.scss'


function Layoutui () {
    
    return (
        <>
        <div className='background'>
            <Layout >
                
                <Menu mode="horizontal" className='layout'
                    // items={[
                    //     {
                    //         key:'1',
                    //         label: 'home',
                            
                    //     },
                    //     {
                    //         key:'2',
                    //         label: 'About',
                            
                    //     },
                    // ]}
                >
                    
                    <Menu.Item>
                        <Link to={'/'}>Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/About">About</Link>
                    </Menu.Item>
                    
                </Menu>
                
            <Layout className='layout-content' >
                <Outlet />
            </Layout>
            </Layout>
        </div>
        {/* <div className='background1'>
        </div> */}
        </>
    )
}

export default Layoutui