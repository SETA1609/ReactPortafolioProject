import { render, screen, waitFor } from '@testing-library/react';
import Projects from './Projects';
import fetchProjectData from './ProjectsData';

jest.mock('./ProjectsData');
jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

type FetchProjectDataType = typeof fetchProjectData;
const mockedFetchProjectData = fetchProjectData as jest.MockedFunction<FetchProjectDataType>;

describe('Projects component', () => {
  it('displays a spinner while loading and shows project cards after fetching', async () => {
    mockedFetchProjectData.mockResolvedValueOnce([
      { title: 'Repo', body: 'Description', photo: '', link: '' }
    ]);

    render(<Projects />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });

    expect(screen.getByText('Repo')).toBeInTheDocument();
  });
});
