interface Props {
    rank: string;
    suit: string;
}

const CardComponent: React.FC<Props> = ({rank, suit}) => {
    return (
        <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suit === 'diams' ? '♦' : suit === 'hearts' ? '♥' : suit === 'clubs' ? '♣' : '♠'}</span>
    </span>
    );
};

export default CardComponent;