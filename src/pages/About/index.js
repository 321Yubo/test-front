import { Card,Form} from 'antd';
import './about.scss'


function About () {
  

    return(
        <>
        <div className='backgroud0'>

            <Card className='card1'>
                <Form>
                    <Form.Item>
                        <h1>Privacy-Preserving Data Mining (PPDM) helps to protect the privacy of data when it is being used
for data mining purposes. Data perturbation is one of the techniques that fall under PPDM which is
suitable for data streams, and it alters the original data values which makes it difficult to recover by
unauthorized people using recovery techniques but still manages to maintain the relevant properties
of the data set which are useful for the data mining purposes. It converts data to another form, so
anyone cannot identify individuals by looking at their personal data. </h1>
                    </Form.Item>
                </Form>
            </Card>

            <Card className='card2'>
                <Form>
                    <Form.Item>
                        <h1>One of the critical success factors of Data Mining is the availability of high-quality data that will
support the generation of accurate models. On the other hand, sensitive data cannot be published
in its original form and thus different types of data perturbation methods have been proposed
to maintain privacy. However, data perturbation can negatively affect the accuracy of prediction
models. When data perturbation techniques are applied to increase the privacy of data, it decreases
the accuracy of the classification models as perturbation distorts the original data values, and this
trade-off between data privacy and classification accuracy is an inherent problem that needs to be
investigated in this area </h1>
                    </Form.Item>
                </Form>
            </Card>

            <Card className='card3'>
                <Form>
                    <Form.Item>
                        <h1>It is worth emphasizing that we mainly focused on developing an advanced perturbation method
that can be used with any classification algorithm, which is suitable for data stream mining. We
used Adaptive Random Forest(ARF) as the classifier for the experiments and measure the accuracy
and privacy for cumulative noise addition in cooperated with different techniques to control the
total noise. The main contribution of this research is an improved noise addition-based perturbation
method that can be used to optimize the accuracy privacy trade-off in a data streaming environment.</h1>
                    </Form.Item>
                </Form>
            </Card>


        </div>
        
        </>
    )
}


export default About