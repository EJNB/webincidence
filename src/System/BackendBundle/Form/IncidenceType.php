<?php

namespace System\BackendBundle\Form;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\DateType;


class IncidenceType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
//            ->add('code',NumberType::class,array(
//                'label' => 'Codigo'
//            ))
            ->add('incidenceDate',DateType::class,array(
                'label' => 'Fecha',
                'widget' => 'single_text',
                'attr' => array('class' => 'format_date_time'),
                'required' => true,
                'input' => 'datetime',
            ))
            ->add('causes',TextareaType::class,array(
                'label' => 'Causas: ',
                'attr' => array(
                    'placeholder' => 'Causas que ocacionaron el incidente'
                ),
                'required' => true
            ))
            ->add('description',TextareaType::class,array(
                'label' => 'Descripción: ',
                'attr' => array(
                    'placeholder' => 'Descripción de la incidencia'
                ),
                'required' => true
            ))
            ->add('corrective_actions',TextareaType::class,array(
                'label' => 'Acciones correctivas: ',
                'attr' => array(
                    'placeholder' => 'Introdusca las acciones correctivas'
                ),
//                'required' => true
            ))

            ->add('immediate_actions',TextareaType::class,array(
                'label' => 'Acciones inmediatas: ',
                'attr' => array(
                    'placeholder' => 'Introdusca las acciones inmediatas'
                ),
//                'required' => true
            ))
//            ->add('incidenceType', EntityType::class, array(
//                'class' => 'System\BackendBundle\Entity\IncidenceType',
////                'choice_label' => 'Tipo de incidencia',
//                'attr' => array(
//                    'class' => 'icheck',
//                    'onchange' => 'changeRadio(this.value)'
//                ),
//                'expanded' => true,
//                'multiple' => false,
//
//
//            ))
            ->add('document',FileType::class,array(
                'label' => 'Documento (PDF, Docx, Jpeg)',
                'required' => false
            ))
//            ->add('service')
            ->add('place',EntityType::class,array(
                'class' => 'System\BackendBundle\Entity\Place',
                'attr' => array(
                    'class' => 'selectpicker form-control',
                    'data-live-search' => 'true',
                    'title' => 'Seleccione el lugar'
                ),
                'label' => 'Lugar'
            ));
//            ->add('claim');
//            ->add('booking');
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'System\BackendBundle\Entity\Incidence'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'system_backendbundle_incidence';
    }


}