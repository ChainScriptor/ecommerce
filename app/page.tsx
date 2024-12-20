import { Button } from "../components/ui/button";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
export default function Home() {
  return (
    <Container className="py-10">
      <div>
        <HomeBanner />
      </div>
    </Container>
  );
}
