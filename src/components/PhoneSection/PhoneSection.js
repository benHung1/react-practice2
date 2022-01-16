import React from 'react';
import { Container, Heading, Row, Text, Section } from '../../globalStyles';
import { PhoneColumn } from './PhoneSectionStyle';
// import { Section } from '../Hero/HeroStyles';

const PhoneSection = () => {
	const data = [
		{
			img: 'https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/ASUS_asus_rog_phone_5s_zs676ks_0816095116067_640x480.jpg',
			title: 'Cheaper an easier',
			description: 'Send money at real exchange rates with no hidden fees',
		},
		{
			img: 'https://i5.walmartimages.com/asr/187c0caa-4c31-4d4c-9443-32fa2ce02aef.35abc34d602c8bacabaaa0f303fac367.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
			title: 'Send money overseas',
			description: 'Send money to more than 200 countries and withdraw anywhere',
		},
		{
			img: 'https://d2lfcsub12kx0l.cloudfront.net/tw/product/img/Lenovo_lenovo_legion_phone_duel_0722140422669_640x480.jpg',
			title: 'Convert and hold 54 currencies',
			description:
				'Holding multiple currencies is completely free, and we use the real exchange rate to convert',
		},
	];

	return (
		<Section white id="phone" padding="60px 0">
			<Container>
				<Row align="center" justify="center" wrap="wrap">
					<Heading mb="1rem" inverse>
						Available on your phone too
					</Heading>
					<Row justify="center" wrap="wrap">
						{data.map((el, index) => (
							<PhoneColumn align="center" key={index}>
								<img width="80%" src={el.img} alt="" />
								<Text as="h5" align="center" inverse bold fontSize="1.3rem">
									{el.title}
								</Text>
								<Text
									align="center"
									width="70%"
									inverse
									mb="auto"
									fontSize="0.9rem"
								>
									{el.description}
								</Text>
							</PhoneColumn>
						))}
					</Row>
				</Row>
			</Container>
		</Section>
	);
};

export default PhoneSection;
