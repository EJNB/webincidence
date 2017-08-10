<?php

namespace System\BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Item
 *
 * @ORM\Table(name="item")
 * @ORM\Entity(repositoryClass="System\BackendBundle\Repository\ItemRepository")
 */
class Item
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Claim", inversedBy="items")
     * @ORM\JoinColumn(name="claim_id", referencedColumnName="id")
     **/
    private $claim;

    /**
     * @ORM\ManyToOne(targetEntity="ItemType", inversedBy="items")
     * @ORM\JoinColumn(name="item_id", referencedColumnName="id")
     **/
    private $itemtype;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
}
