export default {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  userDetails: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  userWrapper: {
    height: '220px',
    width: '220px',
    margin: '5px',
    cursor: 'pointer',
    transition: 'box-shadow 150ms linear',
    '&:hover': {
      boxShadow:
        '0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02), 0 0 20px 4px rgba(0, 0, 0, 0.06)',
    },
  },
  userImg: {
    border: '1px solid rgba(0, 0, 0, 0.12)',
    height: '100%',
    width: '100%',
  },
};
