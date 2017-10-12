<?php

namespace System\BackendBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Incidence
 *
 * @ORM\Table(name="incidence")
 * @ORM\Entity(repositoryClass="System\BackendBundle\Repository\IncidenceRepository")
 */
class Incidence
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
     * @var int
     *
     * @ORM\Column(name="code", type="integer")
     */
    private $code;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="incidence_date", type="date")
     */
    private $incidenceDate;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text")
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="causes", type="text")
     */
    private $causes;

    /**
     * @var string
     *
     * @ORM\Column(name="document", type="string", length=255)
     */
    private $document;

    /**
     * @ORM\ManyToOne(targetEntity="IncidenceType", inversedBy="incidences")
     * @ORM\JoinColumn(name="incidencetype_id", referencedColumnName="id")
     **/
    private $incidenceType;

//    /**
//     * @ORM\ManyToOne(targetEntity="Department", inversedBy="incidences")
//     * @ORM\JoinColumn(name="department_id", referencedColumnName="id")
//     **/
//    private $department;

    /**
     * @ORM\ManyToOne(targetEntity="Service", inversedBy="incidences")
     * @ORM\JoinColumn(name="service_id", referencedColumnName="id")
     **/
    private $service;

    /**
     * @ORM\ManyToOne(targetEntity="Place", inversedBy="incidences")
     * @ORM\JoinColumn(name="place_id", referencedColumnName="id")
     **/
    private $place;

    /**
     * @ORM\ManyToOne(targetEntity="Claim", inversedBy="incidences")
     * @ORM\JoinColumn(name="claim_id", referencedColumnName="id")
     **/
    private $claim;

    /**
     * @ORM\ManyToOne(targetEntity="Booking", inversedBy="incidences")
     * @ORM\JoinColumn(name="booking_id", referencedColumnName="id")
     **/
    private $booking;

    /**
     * @ORM\OneToMany(targetEntity="Incidence_Person", mappedBy="incidence")
     **/
    private $incidences_persons;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->incidences_persons = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set code
     *
     * @param integer $code
     * @return Incidence
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     *
     * @return integer 
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set incidenceDate
     *
     * @param \DateTime $incidenceDate
     * @return Incidence
     */
    public function setIncidenceDate($incidenceDate)
    {
        $this->incidenceDate = $incidenceDate;

        return $this;
    }

    /**
     * Get incidenceDate
     *
     * @return \DateTime 
     */
    public function getIncidenceDate()
    {
        return $this->incidenceDate;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return Incidence
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set causes
     *
     * @param string $causes
     * @return Incidence
     */
    public function setCauses($causes)
    {
        $this->causes = $causes;

        return $this;
    }

    /**
     * Get causes
     *
     * @return string 
     */
    public function getCauses()
    {
        return $this->causes;
    }

    /**
     * Set document
     *
     * @param string $document
     * @return Incidence
     */
    public function setDocument($document)
    {
        $this->document = $document;

        return $this;
    }

    /**
     * Get document
     *
     * @return string 
     */
    public function getDocument()
    {
        return $this->document;
    }

    /**
     * Set incidenceType
     *
     * @param \System\BackendBundle\Entity\IncidenceType $incidenceType
     * @return Incidence
     */
    public function setIncidenceType(\System\BackendBundle\Entity\IncidenceType $incidenceType = null)
    {
        $this->incidenceType = $incidenceType;

        return $this;
    }

    /**
     * Get incidenceType
     *
     * @return \System\BackendBundle\Entity\IncidenceType 
     */
    public function getIncidenceType()
    {
        return $this->incidenceType;
    }

    /**
     * Set service
     *
     * @param \System\BackendBundle\Entity\Service $service
     * @return Incidence
     */
    public function setService(\System\BackendBundle\Entity\Service $service = null)
    {
        $this->service = $service;

        return $this;
    }

    /**
     * Get service
     *
     * @return \System\BackendBundle\Entity\Service 
     */
    public function getService()
    {
        return $this->service;
    }

    /**
     * Set place
     *
     * @param \System\BackendBundle\Entity\Place $place
     * @return Incidence
     */
    public function setPlace(\System\BackendBundle\Entity\Place $place = null)
    {
        $this->place = $place;

        return $this;
    }

    /**
     * Get place
     *
     * @return \System\BackendBundle\Entity\Place 
     */
    public function getPlace()
    {
        return $this->place;
    }

    /**
     * Set claim
     *
     * @param \System\BackendBundle\Entity\Claim $claim
     * @return Incidence
     */
    public function setClaim(\System\BackendBundle\Entity\Claim $claim = null)
    {
        $this->claim = $claim;

        return $this;
    }

    /**
     * Get claim
     *
     * @return \System\BackendBundle\Entity\Claim 
     */
    public function getClaim()
    {
        return $this->claim;
    }

    /**
     * Set booking
     *
     * @param \System\BackendBundle\Entity\Booking $booking
     * @return Incidence
     */
    public function setBooking(\System\BackendBundle\Entity\Booking $booking = null)
    {
        $this->booking = $booking;

        return $this;
    }

    /**
     * Get booking
     *
     * @return \System\BackendBundle\Entity\Booking 
     */
    public function getBooking()
    {
        return $this->booking;
    }

    /**
     * Add incidences_persons
     *
     * @param \System\BackendBundle\Entity\Incidence_Person $incidencesPersons
     * @return Incidence
     */
    public function addIncidencesPerson(\System\BackendBundle\Entity\Incidence_Person $incidencesPersons)
    {
        $this->incidences_persons[] = $incidencesPersons;

        return $this;
    }

    /**
     * Remove incidences_persons
     *
     * @param \System\BackendBundle\Entity\Incidence_Person $incidencesPersons
     */
    public function removeIncidencesPerson(\System\BackendBundle\Entity\Incidence_Person $incidencesPersons)
    {
        $this->incidences_persons->removeElement($incidencesPersons);
    }

    /**
     * Get incidences_persons
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getIncidencesPersons()
    {
        return $this->incidences_persons;
    }
}
