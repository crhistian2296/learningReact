import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

const SideBarItem = ({ id, date, title, body, imageUrls = [] }) => {
  const dispatch = useDispatch();

  const newTitle = useMemo(() =>
    title?.length > 17 ? title.substring(0, 17) + '...' : title
  );

  const onClickItem = () => {
    dispatch(setActiveNote({ id, date, title, body, imageUrls }));
  };

  return (
    <ListItem key={id} disablePadding onClick={() => onClickItem()}>
      <ListItemButton>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={newTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

SideBarItem.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.number,
  body: PropTypes.string,
  title: PropTypes.string,
  imageUrls: PropTypes.array,
};

export default SideBarItem;
