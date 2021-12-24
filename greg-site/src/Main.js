import TopBanner from './TopBanner';
import Page from './Page';

export default function Main(props) {
  return (
    <>
      <TopBanner text={props.imgText} img={props.img} />
      <Page
        subtitle={props.subtitle}
        smallText={props.smallText}
        features={props.features}
      />
    </>
  );
}
