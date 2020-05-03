import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

describe('With React Testing Library', () => {
  const initialState = { dataSource: {
    companyInfo: {
      companyName: 'Heller, Thompson and Towne',
      companyMotto: 'interactive incubate portals',
      companyEst: '2019-11-30T02:00:05.575Z',
    },
    employees: [
      {
        id: 'cca04f3c-e575-4cfc-b2bb-967217c67226',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/derienzo777/128.jpg',
        firstName: 'Georgia',
        lastName: 'Wilson',
        jobTitle: 'District Security Coordinator',
        age: 46,
        bio: 'Aliquid id et minus omnis et tenetur quis vel voluptas.',
        dateJoined: '2018-01-10T03:45:01.360Z',
      },
      {
        id: '9bfea77a-e978-4b5c-b186-c12b7a66043f',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jacobbennett/128.jpg',
        firstName: 'Jasper',
        lastName: 'Goldner',
        jobTitle: 'National Identity Manager',
        age: 17,
        bio: 'Dolores magni ad ut qui esse. Doloribus molestias quaerat porro molestiae culpa sapiente.',
        dateJoined: '2018-08-27T19:56:31.134Z',
      },
      {
        id: 'c43f5344-03f9-4875-a105-7550dd90ac79',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nwdsha/128.jpg',
        firstName: 'Gemma',
        lastName: 'Morissette',
        jobTitle: 'Future Branding Planner',
        age: 40,
        bio: 'Veniam voluptatem dolor. Explicabo iusto quis harum beatae illo qui molestiae.',
        dateJoined: '2018-10-08T05:52:48.924Z',
      },
      {
        id: '9e573a46-a81c-4cb5-b2cf-14bfdb318a9c',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg',
        firstName: 'David',
        lastName: 'Connelly',
        jobTitle: 'Investor Accounts Producer',
        age: 29,
        bio: 'Omnis id quo debitis sit quisquam mollitia odio rerum. Est ut eaque dolorem quos est consequuntur iure.',
        dateJoined: '2016-09-14T21:19:41.528Z',
      },
      {
        id: '06d84218-be9b-4f35-b5d5-335eb71420e7',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bartoszdawydzik/128.jpg',
        firstName: 'Molly',
        lastName: 'Hand',
        jobTitle: 'Regional Marketing Executive',
        age: 37,
        bio: 'Natus hic ut doloribus aperiam nobis sint iure accusamus. Corporis sequi sit saepe.',
        dateJoined: '2016-08-29T16:32:19.837Z',
      },
      {
        id: '8501d48e-cf3b-44ad-9abf-9d931d135070',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/daniloc/128.jpg',
        firstName: 'Taylor',
        lastName: 'Koss',
        jobTitle: 'Legacy Usability Supervisor',
        age: 17,
        bio: 'Quis ut et nulla est. Consequatur odio perspiciatis magni ut quod quasi dolores facere.',
        dateJoined: '2019-06-16T03:11:56.452Z',
      },
      {
        id: 'c0517ba6-8e95-42c0-893a-d9b08415b242',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/emileboudeling/128.jpg',
        firstName: 'Kayla',
        lastName: 'Hoppe',
        jobTitle: 'Regional Research Planner',
        age: 48,
        bio: 'Officia illum dolor sed in totam. Omnis molestiae quis.',
        dateJoined: '2013-03-09T03:23:41.212Z',
      },
      {
        id: 'd66dd512-781f-4772-9085-624d85e0ad39',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/dorphern/128.jpg',
        firstName: 'Ivy',
        lastName: 'Nicolas',
        jobTitle: 'Dynamic Intranet Agent',
        age: 24,
        bio: 'Alias minus voluptatem. Dolorem sequi dolorum quo officia voluptate nobis tempore et.',
        dateJoined: '2017-05-18T12:33:22.327Z',
      },
      {
        id: '561c857b-8b89-44d1-8c1c-8b4e602590df',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/aiiaiiaii/128.jpg',
        firstName: 'Nathan',
        lastName: 'Jenkins',
        jobTitle: 'Principal Paradigm Agent',
        age: 62,
        bio: 'Reiciendis doloribus commodi autem possimus sit magni aut qui.',
        dateJoined: '2017-07-07T11:50:26.168Z',
      },
      {
        id: '6133bbeb-bc73-44fa-8027-e903d7a65b77',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cloudstudio/128.jpg',
        firstName: 'Justin',
        lastName: 'Ferry',
        jobTitle: 'Human Intranet Representative',
        age: 45,
        bio: 'Beatae dicta dolorem voluptates ea quis et expedita voluptatibus. Sit sed eaque.',
        dateJoined: '2020-01-04T20:11:29.927Z',
      },
      {
        id: 'dca6d75c-09de-4fad-916f-79b0c37faabb',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cicerobr/128.jpg',
        firstName: 'Lucas',
        lastName: 'Bahringer',
        jobTitle: 'Chief Response Manager',
        age: 34,
        bio: 'Fuga et autem rerum ipsum beatae aut. Numquam mollitia ut sequi est quod. Est hic repellat.',
        dateJoined: '2013-01-08T17:43:31.107Z',
      },
      {
        id: 'de2977b1-0a04-4f3b-8445-33d2705b9ac6',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/cdavis565/128.jpg',
        firstName: 'Aidan',
        lastName: 'Phillips',
        jobTitle: 'Product Mobility Analyst',
        age: 26,
        bio: 'Et dolore in ducimus. Aperiam consequatur similique autem a dolorem aut.',
        dateJoined: '2018-11-29T01:51:33.336Z',
      },
    ],
  },
  };
  const mockStore = configureStore();

  it('should render correctly', () => {
    const store = mockStore(initialState);
    const { getByText } = render(<Provider store={store}><App /></Provider>);

    expect(getByText('Heller, Thompson and Towne')).toBeInTheDocument();
  });
});
