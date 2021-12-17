import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRsvp from './InfoRSVP';
import GuestRegistry from '../registry/guestRegistry';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';
import { BMerr18 } from '../Common/styled/textstyles/Merr18';
import WhiteFilledButton from '../Common/styled/buttonstyles/WhiteFilledButton';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';

const Invite = ({ isPreview }) => {
  const { event_id: eventId } = useParams();
  const backToInviteLink = `/event/${eventId}/invitation-form`;
  const backtoHomeLink = `/event/${eventId}/`;
  return (
    <>
      <img
        src="https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-133803155.jpg"
        alt="main wedding spalsh"
        style={{
          width: '100vw',
          height: '65vh',
          overflow: 'hidden',
          objectFit: 'cover',
          margin: 0,
        }}
      />
      <Container fluid>
        <InfoRsvp onSameLine={false} showDeadline={false} />
        {isPreview === true && (
          <div style={{ backgroundColor: '#8B5B6E' }}>
            <div className="d-flex justify-content-center py-3">
              <BFaustinaH3>Your Invitation Preview</BFaustinaH3>
            </div>
            <Stack
              className="mb-5 d-flex justify-content-center pt-2 pb-3"
              direction="horizontal"
              gap={3}
            >
              <Link to={backToInviteLink}>
                <PlumFilledButton style={{ border: '1px white solid' }}>
                  More Edits
                </PlumFilledButton>
              </Link>
              <Link to={backtoHomeLink}>
                <WhiteFilledButton>Save Changes</WhiteFilledButton>
              </Link>
            </Stack>
          </div>
        )}
        <Link
          to="/rsvp-form"
          className="d-flex justify-content-center m-5 text-decoration-none"
        >
          <PlumFilledButton style={{ width: '12.5%' }}>RSVP</PlumFilledButton>
        </Link>

        <div className="d-flex justify-content-center mt-5 mb-3">
          <hr className="w-50" />
        </div>
        <BAlexBrush36 className="d-flex justify-content-center mb-3">
          Message From the Couple
        </BAlexBrush36>
        <div className="d-flex justify-content-center">
          <BMerr18 className="w-50 text-center">
            After our 12-week coding bootcamp, you'll be what you want to be: a
            software engineer, fully capable of tackling unique and unfamiliar
            problems and building complex applications on the job. To help you
            land that job, we train you to have in-demand technical skills,
            clear communication skills, and the ability to work autonomously.
            You'll learn JavaScript, you'll learn to code, and so much more.
            Watch this short video to learn how. We are currently offering our
            12-week bootcamp in a live online format due to current conditions.
            Onsite offerings are not available at this time.
          </BMerr18>
        </div>
        <div className="d-flex justify-content-center mt-5 mb-3">
          <hr className="w-50" />
        </div>
        <BAlexBrush36 className="d-flex justify-content-center mb-3">
          Registry
        </BAlexBrush36>
        <GuestRegistry />
        <div className="d-flex justify-content-center mt-5 mb-3">
          <hr className="w-50" />
        </div>
        <BAlexBrush36 className="d-flex justify-content-center mb-3">
          Gallery
        </BAlexBrush36>
      </Container>
    </>
  );
};

export default Invite;
