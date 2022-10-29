import Card from "../../components/card/card.component";
import Container from "../../components/containers/container.component";

const ContainerPlayground = () => {
  return (
    <>
      <br />
      <br />
      <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }}></div>
      <Container flex gap="2%" childFlexBasis="23%">
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
      </Container>
      <Container flex gap="3%" childFlexBasis="31.33%">
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
        <Card>Test</Card>
      </Container>
    </>
  );
};

export default ContainerPlayground;
