import Head from "next/head";
import { FormattedMessage } from "react-intl";
import { StyledButton } from "../components/atoms/button";
import { Argon } from "../components/layouts/argon";
import { StyledDiv } from "../components/molecules/page_content";
import { Sidebar } from "../components/molecules/sidebar";

const IndexPage = () => {
  return (
    <Argon>
      <Head>
        <title>Gaitscribe</title>
      </Head>

      <Sidebar />

      <StyledDiv>
        <StyledButton type="button" variant="contained">
          <FormattedMessage id="sample_message" />
        </StyledButton>
      </StyledDiv>
    </Argon>
  );
};

export default IndexPage;
