import React, { useState, useEffect } from 'react';

import Ticket from './Ticket';

export default function App() {
  const subtasks = [11, 12, 13, 14, 15, 16, 17, 18];
  const [issue, setIssue] = useState();
  const getIssue = async () =>
    Promise.resolve({
      id: 1,
      title: 'sit amet erat nulla tempus vivamus',
      description:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      assignee: 'Nelli Bielfeld',
      status: 'In progress',
      subtasks: subtasks,
    });
  useEffect(() => {
    getIssue().then((res) => {
      setIssue(res);
    });
  }, []);
  return (
    <div>
      {console.log('Issue:', issue)}
      <Ticket title={issue && issue.title} />
    </div>
  );
}
